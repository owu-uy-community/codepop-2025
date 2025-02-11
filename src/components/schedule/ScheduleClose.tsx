export default function SchedduleClose() {
  return (
    <div className="relative flex w-full px-2 overflow-hidden mt-10">
      <div className="flex flex-1 w-full px-4 md:px-6 py-4 bg-white/50 rounded-lg border-b-4 border-yellow-400 relative overflow-hidden">
        <div className="bg-yellow-400/50 rounded-full w-48 h-48 absolute blur-3xl top-5 left-22"></div>
        <div className="relative z-10 flex flex-col px-6 py-4">
          <span className="flex font-bangers items-center text-3xl gap-4 justify-center">
            Muchas Gracias <span>🙌</span>
          </span>

          <p className="mt-4">
            Recuerda que para que el evento transcurra en su correcto orden,
            debes llegar temprano a las charlas y no olvides traer tu Laptop
            para los workshops. Si tienes dudas puedes ponerte en contacto con
            nosotros!
          </p>
        </div>
      </div>
    </div>
  );
}
