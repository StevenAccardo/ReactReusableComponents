import React, { useState, useEffect } from 'react'

export default function Modal({classDef, children, timeout, show}) {

    const [showBool, setShowBool] = useState(show)

    useEffect(() => {
        setTimeout(() => {
            setShowBool(false);
        }, timeout);
    });

    if (!showBool) {
        return null;
    }

    return (
        <div className={classDef}>
            <section>{children}</section>
        </div>
    );
}