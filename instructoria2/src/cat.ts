//var parametro1 = process.argv[2];
//console.log(parametro1);

export function cli(args: string[]) {
    const message = args.join(' ');
    console.log(message);
   }