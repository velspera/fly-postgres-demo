import { Link } from "@remix-run/react";

function MessageList({visitors}: any) {
    return (
        <div className="mt-4 md:mt-0"> 
          <div className="md:grid md:grid-cols-2 md:gap-4 rounded-xl md:space-y-0 space-y-3" id="visitor-list">
            {visitors.visitors.map((visitor: {id: number, createdAt: string, name: string, email: string, title: string, message: string}) => (
              <div key={visitor.id} className="visitor bg-indigo-300 px-5 pt-3 pb-5 shadow-lg rounded-lg">
                  <article>
                      <header>
                          <div className="flow-root">
                          <div className="min-h-6 min-w-6 bg-stone-50 text-violet-700 float-right float-top flex items-center justify-center font-bold rounded-2xl"><p className="text-xs">X</p></div>
                            <h2 className="text-lg font-semibold leading-tigh flex items-center">
                              <div className="min-h-12 min-w-12 bg-stone-50/75 float-left mr-2 flex items-center justify-center rounded-3xl">
                                <span className="text-sm mb-1"># </span>
                                <span className="text-2xl text-indigo-700 font-bold font-rocksalt">{visitor.id}</span>
                              </div>
                              <span className="font-loveya">{visitor.title}</span>
                            </h2>
                          </div>
                          <p className="italic pt-1"><span className="font-bold">{visitor.name}</span><br/>
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
                      <p className="p-2 bg-stone-50/50 mt-2 rounded-sm min-h-full">{visitor.message}</p>
                  </article>
              </div>
            ))}
          </div>
        </div>
      );
}

export default MessageList;