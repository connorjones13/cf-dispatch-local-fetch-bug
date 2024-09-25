const handler: ExportedHandler<Env> = {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext) {
    const dispatcher = env.DISPATCHER.get('content-worker');
    const dispatchRequest = new Request(request, {
      headers: {
        'X-Custom-Header': 'Hello from dispatch-worker',
      }
    })
    return dispatcher.fetch(dispatchRequest);
  }
};

export default handler;
