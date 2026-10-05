import React from 'react'

const Card = (props) => {
    console.log(props);
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className='h-80 w-90 rounded-xl overflow-hidden'>
                <img className='h-full w-full object-cover' src={props.elem.download_url} lazyload="true" />
                </div>
                <h2 className='text-white'>{props.elem.author}</h2>
            </a>
        </div>
    )
}
export default Card