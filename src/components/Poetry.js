import React, { useState } from 'react'

// poems list
import Poems from './Poems'

export default function Poetry(verse) {
    // let result = null;

    const [poem, setPoem] = useState("");
    const PoemsJson = Poems

    // change input text function
    const changeHandler = (e) => {
        if (e.target.value === '') {
            setPoem("")
        } else {
            PoemsJson.map((po, index) => {

                if (po.slice(0, 1).includes(e.target.value.slice(-1))) {
                    setPoem(po)
                }
                return poem
            }
            )
        }

    }

    return (
        <div>
            <h3>6. شروع به نوشتن شعر کنید 👇</h3>
            <input onChange={changeHandler} type="text" placeholder="write your poem here.." />
            <p>
                {poem}
            </p>
            <h4>حروف موجود در پایگاه شعر: (ب , ج , ا , م , ل , ف , ر , س , پ , خ , ع , چ , ه )</h4>
        </div>
    )
}
