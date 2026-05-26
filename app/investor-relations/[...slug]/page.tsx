import InvestorRelations from '../../components/InvestorRelations'

export default function InvestorRelationsSubPage({
  params,
}: {
  params: { slug: string[] }
}) {
  return <InvestorRelations slug={params.slug} />
}
