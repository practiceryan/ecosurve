import React from 'react';
import './App.css';
import BreedImageGalleryPage from "./UI/Pages/BreedImageGalleryPage";
import {QueryClient, QueryClientProvider} from "react-query";
import {Container, MantineProvider} from "@mantine/core";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider>
                <Container
                    fluid
                >
                    <BreedImageGalleryPage />
                </Container>
            </MantineProvider>
        </QueryClientProvider>
    );
}

export default App;
