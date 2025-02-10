'use client';
import { useState } from 'react';

export default function Dependencies() {
    const [items, setItems] = useState([
        "core-234-add-mismatch-systems-upbound",
        "core-234-add-mismatch-systems-upbound",
        "core-234-add-mismatch-systems-upbound",
        "core-234-add-mismatch-systems-upbound",
        "core-234-add-mismatch-systems-upbound",
        "core-234-add-mismatch-systems-upbound",
        "core-234-add-mismatch-systems-upbound",
        "core-234-add-mismatch-systems-upbound",
        "core-234-add-mismatch-systems-upbound",
        "core-234-add-mismatch-systems-upbound",
        "core-234-add-mismatch-systems-upbound",
        "Tes 1",
        "Te 1",
        "T 1",
        "Testing 1",
        "Testin 1",
        "Testi 1",
        "Test 1",
        "Tes 1",
        "Te 1",
        "T 1",
        "Testing 1",
        "Testin 1",
        "Testi 1",
        "Test 1",
        "Tes 1",
        "Te 1",
        "T 1",
        "Testing 1",
        "Testin 1",
        "Testi 1",
        "Test 1",
        "Tes 1",
        "Te 1",
        "T 1"
    ]);

    return (
        <div className='
                overflow-y-scroll 
                min-h-[300px]
                max-h-[700px]
                p-2
                m-2 mb-8
                border-primary'
        >
            {items.map((elem, index) =>
                <div key={"key_" + index} className="
                                                m-1 btn btn-sm
                                                text-secondary-content
                                                bg-secondary"
                >
                    {elem}
                </div>
            )
            }
        </div>
    )
}