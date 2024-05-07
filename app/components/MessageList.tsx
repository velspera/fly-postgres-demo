import { Link } from "@remix-run/react";

function MessageList({visitors}: any) {
    return (
        <ul id="visitor-list">
          {visitors.visitors.map((visitor: {id: number, createdAt: string, name: string, email: string, title: string, message: string}) => (
            <li key={visitor.id} className="visitor">
                <article>
                    <header>
                        <h2>{visitor.title}</h2>
                        <p>#{visitor.id} - {visitor.name}<br/>
                        <time dateTime={visitor.createdAt}>
                            {new Date(visitor.createdAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            })}
                        </time>
                        </p>
                    </header>
                    <p>{visitor.message}</p>
                </article>
            </li>
          ))}
        </ul>
      );
}

export default MessageList;