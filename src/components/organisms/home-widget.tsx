export function HomeWidget() {
  return (
    <div className="fixed left-0 top-0 z-20 w-full">
      <div className="bg-primary-gradient h-[200px] w-full px-6 py-8">
        <img
          src="/assets/vector/line.svg"
          alt="line-vector"
          className="absolute left-0 top-0 w-full"
        />
        <div className="flex items-center justify-between">
          <div className="flex">
            <img alt="agpaii" className="-mt-7" src="/assets/logo/agpaii-logo-only.svg" />
            <div className="ml-4 flex flex-col gap-1">
              <h1 className="font-semibold text-white">Rumah AGPAII</h1>
              <p className="text-xs font-medium text-white">Assalamualaikum Ardata Media</p>
              <p className="text-xs font-medium text-white">08 Februari 2023</p>
            </div>
          </div>
          <img
            className="h-12 w-12 rounded-full"
            src={`https://i.pravatar.cc/150?img=${1}`}
            alt="avatar"
          />
        </div>
      </div>
      <div className="px-6">
        <div
          className="h-[90px] w-full rounded-xl bg-white p-4 shadow-lg"
          style={{ marginTop: -70 }}
        >
          <p className="text-sm font-medium">Semarang, Jawa Tengah</p>
          <p className="mt-1 text-xs">Dzuhur 11:15 WIB</p>
        </div>
      </div>
    </div>
  );
}
