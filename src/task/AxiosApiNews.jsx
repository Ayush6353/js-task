import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '@mui/material/CircularProgress';

const AxiosApiNews = () => {
    const [page, setPage] = useState(1);
    const [myData, setMyData] = useState(null);
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-07-02&sortBy=publishedAt&apiKey=3d4b3bc077e64c2e93c9dddfcf7bdc80&page=${page}&pageSize=10`)
            .then((res) => setMyData(res.data.articles));
    }, [page]);
    return (
        <>


            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFEF', padding: 5, }}>
                {
                    myData ? myData.map((post) => {
                        return (

                            <Grid xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Card sx={{ maxWidth: 505, borderRadius: 5, padding: 5, }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {post.author}
                                    </Typography>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={post.urlToImage}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {post.description}
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="div">
                                                {post.publishedAt}
                                            </Typography>
                                            <Typography gutterBottom variant="body2" color="text.secondary">
                                                {post.content}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                        )
                    }) :
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFEF', padding: 5, height: '83rem' }}>
                            <CircularProgress color="secondary" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                        </Grid>
                }
            </Grid>

            <Pagination
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 90 }}
                count={5}
                page={page?page:<Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFEF', padding: 5, height: '83rem' }}>
                <CircularProgress color="secondary" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
            </Grid>}
                defaultPage={page}
                hideNextButton={page >= 5}
                hidePrevButton={page <= 1}
                onChange={(event, value) => setPage(value)}
                shape="rounded"
                size="large"
            />
        </>
    )
}

export default AxiosApiNews