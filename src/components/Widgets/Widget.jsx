import React,{useState, useEffect} from 'react';
import apiClient from "../../spotify";
import "./Widget.css"
const Widget = ({ artistID }) => {
    const [similar, setSimilar] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [newRelease, setNewRelease] = useState([]);
  
  return (
    <div>Widget</div>
  )
}

export default Widget