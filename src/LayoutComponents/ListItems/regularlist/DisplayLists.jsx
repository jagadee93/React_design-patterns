import React from 'react'
import RegularList from './RegularList';
import people from "../people/data.json";
import SmallPersonListItem from '../people/SmallPersonListItem';
import LargePersonListItem from '../people/LargePersonListItem';
const DisplayLists = () => {
    return (
        <div>
            <RegularList items={people} resourceName={'person'} itemComponent={SmallPersonListItem} />
            <RegularList items={people} resourceName={'person'} itemComponent={LargePersonListItem} />
        </div>
    )
}

export default DisplayLists