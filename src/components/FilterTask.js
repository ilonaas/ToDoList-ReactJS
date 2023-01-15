import React from 'react'

function FilterTask() {
    return (
        <form className='filter-form'>
            <div className='form-control form-control-check'>
                <p className="filter-title">Search:</p>
                <input
                    className='filter-input'
                    type='text'
                    placeholder='Någon speciell du letar efter?'
                />
            </div>
        </form>
    )
}

export default FilterTask
