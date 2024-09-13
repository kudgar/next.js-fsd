import Head from "next/head"

import { Layout } from './ui/layout';
import { MainAction } from "./ui/main-action";
import { SuggestionsList } from '@/src/features/suggestion-list';

export function HomePage() {
  return (
    <>
      <Head>

      </Head>
      <div>awdwad</div>

      <SuggestionsList />

      <Layout
        actions={<MainAction />}
      />
    </>
  )
};