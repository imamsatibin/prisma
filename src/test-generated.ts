import { Prisma } from './generated'
import { performance } from 'perf_hooks'

async function main() {
  console.clear()
  const prisma = new Prisma()
  const before = performance.now()
  const result = await prisma.users.create({
    data: {
      name: 'Hans Schmitt',
      // asdsd0a9usda: '',
    },
    name: true,
    select: {
      strings: 1,
      // bla: false,
      // name: '2019-05-10T08:50:30.658Z',
      // id: false,
    },
  } as any)
  console.log(`Took ${performance.now() - before}ms`)
  console.log(result)
}

main().catch(console.error)
