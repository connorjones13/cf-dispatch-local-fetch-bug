const handler = {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext) {
    console.log('[content-worker] headers', request.headers);
    return new Response(`Hello World! \n${request.headers.get('X-Custom-Header')}`);
  }
};

export default handler;
