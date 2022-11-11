import React from 'react'
import { Row } from 'react-bootstrap';
import { knowledgeTaste } from '../../assets/consts/data'
import LeftKnowledge from './LeftKnowledge'
import MiddleKnowledge from './MiddleKnowledge';
import RightKnowledge from './RightKnowledge';
import './specialties.scss'

export default function Specialties() {
  const {leftList,middle,rightList } = knowledgeTaste;
  return (
    <Row className='knowledge-block'>
      <LeftKnowledge lists={leftList} />
      <MiddleKnowledge data={middle} />
      <RightKnowledge lists={rightList}/>
    </Row>
  )
}
