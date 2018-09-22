function sendResponse(status,message,data){
    return {
        "STATUS":status,
        "MESSAGE":message,
        "DATA":data
    }
}

module.exports = {
    sendResponse : sendResponse
}