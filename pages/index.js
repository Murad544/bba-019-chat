import React, {useContext} from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";


export default function Auth() {
  const { setUsername, setSecret, username, secret } = useContext(Context)

  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault()

    if (username.length === 0 || secret.length === 0) return;

    axios.put(
      'https://api.chatengine.io/users/',
      {username, secret},
      {headers: {"Private-key": 'b1c96b94-3e2c-40b2-a3cd-3c6df10f00a0'}}
    )
    .then((r) => router.push('/chats'));
  }
  return (
  <div className="background">
    <div className="auth-container">
      <form className='auth-form' onSubmit={(e) => onSubmit(e)}>
        <div className='auth-title'>NextJs Chat</div>

        <div className='input-container'>
          <input 
          type="text"
          placeholder='Email'
          className='text-input'
          onChange = {(e) => setUsername(e.target.value)} />
        </div>

        <div className='input-container'>
          <input 
          type="password"
          placeholder='Password'
          className='text-input'
          onChange = {(e) => setSecret(e.target.value)} />
        </div>

        <button
        type="submit"
        className="submit-button">
          Login/ Sign Up
        </button>
      </form>
    </div>
  </div>
  )
}
