const simpleLogger = (req: any, res: any, next: any) => {
    console.log( new Date(), req.method, req.url);
    next();
}

export {simpleLogger};