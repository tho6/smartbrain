import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, your current entry count is...`}
                {/* {'Tavin, your current rank is...'} */}
            </div>
            <div className='white f1'>
                {`${entries}`}
                {/* {'#5'} */}
            </div>
        </div>
    );
}

export default Rank;