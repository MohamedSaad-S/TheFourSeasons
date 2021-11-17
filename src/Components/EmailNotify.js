import React from 'react'
import './EmailNotify.scss'

const EmailNotify = () => {
    return (
        <div>
            <div className="email_notify">
                <form action="/" method="POST">
                    <input
                        type="email"
                        name="email"
                        placeholder="Please enter your email"
                    ></input>
                    <button type="submit">Get Notified</button>
                </form>
            </div>
        </div>
    )
}

export default EmailNotify;