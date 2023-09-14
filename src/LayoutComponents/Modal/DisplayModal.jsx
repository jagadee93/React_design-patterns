import React from 'react'
import RegularList from '../ListItems/regularlist/RegularList'
import people from "../ListItems/people/data.json"
import LargePersonListItem from '../ListItems/people/LargePersonListItem';
import Modal from './Modal';
const DisplayModal = () => {
    return (
        <Modal>
            <LargePersonListItem person={people[0]} />
        </Modal>
    )
}

export default DisplayModal