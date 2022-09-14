import { useState } from "react";
import api from "../../services/api";
import { loginService } from "../../services/auth";

export function login(data) {
    const loginData = data;
    return new Promise((resolve, reject) => {
        api.post('/login', loginData)
            .then((response) => {
                loginService(response.data.token)
                resolve({ message: 'loggedIn', user: response.data.user });
            })
            .catch((err) => reject(err));
        }
    );
}