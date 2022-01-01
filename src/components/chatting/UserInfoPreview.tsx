
export default function UserInfoPreview() {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <img className="rounded-full w-20 h-20"
        src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg" />
      <div className="text-lg font-semibold mt-3">
          Deja Brandy
      </div>
      <div className="text-sm text-gray-400">
        Full stack developer
      </div>
    </div>
  )
}
