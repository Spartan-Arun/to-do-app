import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './components/check-box';
import List from './components/list';
import ListItem from './components/list-item';
import db from './firebase-connector';
import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import {v4} from 'uuid';
import { Spinner } from 'react-bootstrap';
const App = () =>{

    const [name,setName] = useState('');

    const [tasks,setTasks] = useState([]);

    const [loading,setLoading] = useState(false)

    const fetchData = async () =>{
        setLoading(true);
        const tasks = []
        const querySnapshot = await getDocs(collection(db, "tasks"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            tasks.push({id:doc.id,...doc.data()});
        });  
        setTasks(tasks);
        setName('');
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const setTodo = async id => {
        setLoading(true)
        const todo = tasks.find(task=>task.id===id);
        const taskRef = doc(db,'tasks',id)
        if(todo){
            const res = await updateDoc(taskRef,{status:!todo.status})
            fetchData();
            setLoading(false);
        }
    }

    const addTodo = async () => {
        setLoading(true);
        const newRef = doc(db,'tasks',v4());
        const res =  await setDoc(newRef,{name,status:false});
        fetchData();
        setLoading(false);
    }

    return (
        <div className="d-flex align-items-center flex-column mt-5">
            <div className="d-flex align-items-center justify-content-between mx-5 p-4">
                <div className="col-9">
                    <input className="form-control" onChange={e=>setName(e.target.value)} type="text" placeholder="Task Name"/>
                </div>
                <button className="btn btn-md btn-primary ml-3" disabled={!name} onClick={
                    ()=>addTodo()
                }>Add</button>
            </div>
            {loading&&<Spinner animation="border"/>}
            <List>
                <h4>Tasks</h4>
                <div style={{height:'50vh'}}className="overflow-auto">
                    {tasks.map(
                        (task,i) => <ListItem onClick={()=>setTodo(task.id)}  key={task.id} status={task.status ? 'done' : ''}><p>{task.name}</p><Checkbox checked={task.status}/></ListItem>
                    )}
                </div>
            </List>
        </div>
    )
}

ReactDOM.render(
    <App/>
, document.getElementById('root'));