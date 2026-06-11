import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://unobvious-truths.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root endpoint
def test_root(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert "Portfolio" in data["message"] or "Hello" in data["message"]


# Contact POST + GET round trip
def test_contact_create_and_list(session):
    payload = {
        "name": "TEST_User",
        "email": "test_user@example.com",
        "message": "TEST_message hello from pytest",
    }
    r = session.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["name"] == payload["name"]
    assert body["email"] == payload["email"]
    assert body["message"] == payload["message"]
    assert "id" in body and isinstance(body["id"], str) and len(body["id"]) > 0
    assert "created_at" in body
    created_id = body["id"]

    g = session.get(f"{API}/contact")
    assert g.status_code == 200
    items = g.json()
    assert isinstance(items, list)
    ids = [i["id"] for i in items]
    assert created_id in ids


# Validation errors for empty fields
def test_contact_validation_empty(session):
    r = session.post(f"{API}/contact", json={"name": "", "email": "", "message": ""})
    assert r.status_code == 422


def test_contact_validation_missing(session):
    r = session.post(f"{API}/contact", json={})
    assert r.status_code == 422


# Status regression
def test_status_create_and_list(session):
    r = session.post(f"{API}/status", json={"client_name": "TEST_client"})
    assert r.status_code == 200
    data = r.json()
    assert data["client_name"] == "TEST_client"
    assert "id" in data

    g = session.get(f"{API}/status")
    assert g.status_code == 200
    assert isinstance(g.json(), list)
