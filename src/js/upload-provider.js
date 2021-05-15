const uploadURL = 'https://api.cloudinary.com/v1_1/sk8walker/upload';
const uploadPreset = 'ztdb0ubp';

const uploadImage = async (archivo) => {

    const formData = new FormData();
    formData.append('upload_preset',uploadPreset);
    formData.append('file',archivo);

    try {
        const resp = await fetch(uploadURL, {
            method: 'POST',
            body: formData,
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;
        } else {
            //throw await resp.json();
        }

    } catch (error) {
        throw error;
    }

}

export{
    uploadImage,
}

