import React from 'react';
import './App.css';
import BreedImageGalleryPage from "./UI/Pages/BreedImageGalleryPage";
import {QueryClient, QueryClientProvider} from "react-query";
import {Container} from "@mantine/core";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Container>
                <BreedImageGalleryPage />
            </Container>
        </QueryClientProvider>
    );
}

export default App;
