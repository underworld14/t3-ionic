interface UserSearchListProps {
  name: string;
  email: string;
  avatar?: string | null;
}

export function UserSearchList({ name, email, avatar }: UserSearchListProps) {
  return (
    <div className="flex items-center border-b border-[#E0E0E0] py-3">
      <img
        className="h-12 w-12 rounded-full"
        src={avatar || 'https://ionicframework.com/docs/img/demos/avatar.svg'}
        alt="avatar"
      />
      <div className="ml-5 flex flex-col">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-[#898A8D]">{email}</p>
      </div>
    </div>
  );
}
