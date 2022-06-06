import React from "react";
import {act, render, RenderResult} from "@testing-library/react";

export async function renderWithAct(element: React.ReactElement) {
    let result: RenderResult | undefined;
    await act(async () => {
        result = render(element);
    });
    return result;
}

export async function actAsync(callback: () => void) {
    await act(async () => callback());
}