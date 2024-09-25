const handler: ExportedHandler<Env> = {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext) {
    const dispatcher = env.DISPATCHER.get('content-worker');
    return dispatcher.fetch(request);
  }
};

export default handler;
