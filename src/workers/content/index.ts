const handler = {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext) {
    console.log('[content-worker] headers', request.headers);
    return new Response('Hello World!');
  }
};

export default handler;
