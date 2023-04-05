import Link from "next/link";

interface ItemProps {
  id: number;
  comments: number;
  hearts: number;
  content: string;
  userName: string;
  tweetDt: Date;
}

export default function Item({ content, id, userName }: ItemProps) {
  return (
    <div className="border border-solid">
      <div>
        <img src="" alt="" />
        <span>{userName}</span>
      </div>
      <Link href={`/tweets/${id}`} legacyBehavior>
        <a className="">{content}</a>
      </Link>
    </div>
  );
}
