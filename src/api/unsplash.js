import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:"Client-ID 09842f3734a179b4b38f519035341efabb2d60eff5abff7f6186d3bd1576339d"
    }
})

