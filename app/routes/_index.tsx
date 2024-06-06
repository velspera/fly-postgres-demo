import { useLoaderData } from '@remix-run/react';
import { redirect, json, MetaFunction, ActionFunctionArgs } from '@remix-run/node';
import { Prisma } from '@prisma/client';
import { db } from '../utils/db.server';
import NewMessage from '../components/NewMessage';
import MessageList from '../components/MessageList';
import { getVisitors } from '../data/messages';

export const meta: MetaFunction = () => {
  return [
    { title: "Birthday Guestbook: Elizabeth Montgomery" },
    { name: "description", content: "Happy Birthday, Elizabeth!" },
  ];
};

export default function Index() {
  const visitors = useLoaderData();
  return (
    <div className="grid md:grid-cols-3 md:gap-4">
      <div className="">
        <NewMessage />
      </div>
      <div className="md:col-span-2">
        <MessageList visitors={visitors}/>
      </div>
    </div>
  );
};

export const loader = async () => {
  const visitors = await getVisitors();
  return visitors;
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const messageData: {name: string, email: string, title: string, message: string} = Object.fromEntries(formData);  
  const body = messageData;
    let data: Prisma.visitorsCreateInput = {
      name: body.name,
      email: body.email,
      title: body.title,
      message: body.message
    }
    await db.visitors.create({
      data: data,
    });
    return redirect('/');
}
