import React from 'react'

const FilterTask = ({filterInput, setInputFilter, tasks}) =>  {
    const inputHandler = (e) => {
        setInputFilter(e.target.value)
        console.log(e.target.value);
    }
  return (
    <form className='filter-form'>
        <div className='form-control form-control-check'>
            <p className="filter-title">Search:</p>
            <input
            value={filterInput}
            onChange={inputHandler}
            className='filter-input'
            type='text'
            placeholder='Någon speciell du letar efter?'
            />
        </div>
    </form>
  )
}

export default FilterTask






// function FilterTask() {
//     return (
//         <form className='filter-form'>
//             <div className='form-control form-control-check'>
//                 <p className="filter-title">Search:</p>
//                 <input
//                     className='filter-input'
//                     type='text'
//                     placeholder='Någon speciell du letar efter?'
//                 />
//             </div>
//         </form>
//     )
// }

// export default FilterTask
