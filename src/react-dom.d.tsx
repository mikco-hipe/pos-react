declare module 'react-dom' {
    interface Root {
        render(element: React.ReactNode): void;
    }

    const createRoot: (container: Element) => Root;

    export {
        createRoot,
    };
}
