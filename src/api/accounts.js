import axios from "axios";

const baseUrl = "/accounts";

// user api functions
export async function fetchUsers(params = {}) {
  try {
    const { data } = await axios.get(`${baseUrl}/users/`, { params: params });
    return data;
  } catch (e) {
    console.error(e);
  }
}

// both require the user's current password; errors propagate so the
// dialog stays open and the axios interceptor shows the server message
export async function resetPass(currentPassword, pass) {
  const payload = { current_password: currentPassword, password: pass };
  const { data } = await axios.put(`${baseUrl}/resetpw/`, payload);
  return data;
}

export async function resetTwoFactor(currentPassword) {
  const { data } = await axios.put(`${baseUrl}/reset2fa/`, {
    current_password: currentPassword,
  });
  return data;
}

// sessions api
export async function fetchUserSessions(id) {
  try {
    const { data } = await axios.get(`${baseUrl}/users/${id}/sessions/`);
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function deleteAllUserSessions(id) {
  try {
    const { data } = await axios.delete(`${baseUrl}/users/${id}/sessions/`);
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function deleteUserSession(id) {
  try {
    const { data } = await axios.delete(`${baseUrl}/sessions/${id}/`);
    return data;
  } catch (e) {
    console.error(e);
  }
}

// role api function
export async function fetchRoles(params = {}) {
  try {
    const { data } = await axios.get(`${baseUrl}/roles/`, { params: params });
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function removeRole(id) {
  const { data } = await axios.delete(`${baseUrl}/roles/${id}/`);
  return data;
}

export async function saveRole(role) {
  const { data } = await axios.post(`${baseUrl}/roles/`, role);
  return data;
}

export async function editRole(id, role) {
  const { data } = await axios.put(`${baseUrl}/roles/${id}/`, role);
  return data;
}

// api key api functions
export async function fetchAPIKeys(params = {}) {
  try {
    const { data } = await axios.get(`${baseUrl}/apikeys/`, { params: params });
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function saveAPIKey(apiKey) {
  const { data } = await axios.post(`${baseUrl}/apikeys/`, apiKey);
  return data;
}

export async function editAPIKey(id, apiKey) {
  const { data } = await axios.put(`${baseUrl}/apikeys/${id}/`, apiKey);
  return data;
}

export async function removeAPIKey(id) {
  const { data } = await axios.delete(`${baseUrl}/apikeys/${id}/`);
  return data;
}
