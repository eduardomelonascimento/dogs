const API = import.meta.env.VITE_API_URL;

export function GetToken(username, password) {
  return {
    url: API + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    },
  };
}

export function ValidateToken(token) {
  return {
    url: API + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function GetUser(token) {
  return {
    url: API + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function CreateUser(username, password, email) {
  return {
    url: API + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    },
  };
}

export function PostPhoto(body, token) {
  return {
    url: API + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: body,
    },
  };
}

export function GetPhotos(page, total, user) {
  return {
    url: `${API}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function GetPhoto(id) {
  return {
    url: `${API}/api/photo/${id}`,
    options: null,
  };
}

export function PostComment(id, body, token) {
  return {
    url: `${API}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ comment: body }),
    },
  };
}

export function DeletePhoto(id, token) {
  return {
    url: `${API}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function PasswordLost(body) {
  return {
    url: `${API}/api/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PasswordReset(body) {
  return {
    url: `${API}/api/password/resetw`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function GetStats(token) {
  return {
    url: `${API}/api/stats/`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },
    },
  };
}
