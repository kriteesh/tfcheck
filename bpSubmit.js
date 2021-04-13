var loadFile = async function(event) {
    dataUrl = [];
    var loadFile = async function(event) {
        dataUrl = [];
        const pred = document.querySelector('#pred');
        const cav = document.querySelector('#cav');
        var image = document.getElementById('output');
        fileObj = event.target.files[0];
        // console.log(typeof(fileObj.type));
        if((fileObj.type=="image/png")||(fileObj.type=="image/jpg")||(fileObj.type=="image/jpeg"))
        {
            
            streamer(event.target.files[0]);
            image.src = URL.createObjectURL(fileObj);
        }
        else if(fileObj.type=="application/pdf"){
            pdfToPng(inp,cav)
        }
        else{
            console.log("none")
        }
    fileObj = event.target.files[0];
    // console.log(typeof(fileObj.type));
    if((fileObj.type=="image/png")||(fileObj.type=="image/jpg")||(fileObj.type=="image/jpeg"))
    {
        
        streamer(event.target.files[0]);
        image.src = URL.createObjectURL(fileObj);
    }
    else if(fileObj.type=="application/pdf"){
        pdfToPng(inp,cav)
    }
    else{
        console.log("none")
    }
}
}



async function check(policyNum,flightNum,flightOp,data){
    for(let i=0;i<data.length;i++)
    {
        let data = {
            "encoded_string": data[i],
            "policy_no": policyNum,
            "flight_no": flightNum,
            "flight_op": flightOp,
            "doc_num" : (i+1).toString()
        }

        let response = await fetch('https://39u3b3cep7.execute-api.ap-south-1.amazonaws.com/prod/checker', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        
        let result = await response.json();
        return result; 
    }
    
}