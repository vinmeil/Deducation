import React from 'react'
import Link from 'next/link'

const DonateButton = () => {
    return(
        <>
            <Link href="">
                <button
                    type="button"
                    className="p-2 rounded-lg border-solid bg-accent text-lg text-background font-semibold px-3"
                >
                    Donate
                </button>
            </Link>
        </>
    )
}

export default DonateButton