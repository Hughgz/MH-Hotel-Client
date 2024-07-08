import axios from "axios";

export const API_URL = axios.create({
    baseURL: "http://localhost:8080/api/room"
})

export async function addRoom(photo, roomType, roomPrice){
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await API_URL.post("/new-room", formData)
    if(response.status === 201){
        return true
    }else{
        return false
    }
}

export async function getRoomType(){
    try{
        const response = await API_URL.get("/room-type")
        return response.data
    }catch(error){
        throw new Error("Error fetching data")
    }
}

export async function getAllRoom(){
    try{
        const result = await API_URL.get("/all-room")
        return result.data
    }catch(error){
        throw new Error("Error fetching data")
    }
}

export async function deleteRoom(roomId){
    try{
        const deleteRoom = await API_URL.delete(`/delete-room/${roomId}`)
        return deleteRoom.data
    }catch(error){
        throw new Error(`Error deleting room ${roomId}`)
    }
}

export async function updateRoom(roomId, roomData) {
    const formData = new FormData();
    formData.append("roomType", roomData.roomType);
    formData.append("roomPrice", roomData.roomPrice);
    formData.append("photo", roomData.photo);

    const response = await API_URL.put(`/update-room/${roomId}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
}


export async function getRoomById(roomId){
    try{
        const response = await API_URL.get(`/getId/${roomId}`)
        return response.data
    }catch(error){
        throw new Error("Error fetching data")
    }
}