import { Status } from '@prisma/client'
import { prisma } from '../src/lib/prisma'

// ── Dados base ────────────────────────────────────────────────────────────────

const grupos = [
  { nome: 'ESP' },
  { nome: 'A' },
  { nome: 'B' },
  { nome: 'C' },
  { nome: 'D' },
  { nome: 'E' },
  { nome: 'F' },
  { nome: 'G' },
  { nome: 'H' },
  { nome: 'I' },
  { nome: 'J' },
  { nome: 'K' },
  { nome: 'L' },
]

const selecoes = [
  // ESPECIAIS
  { nome: 'Somos 26',         sigla: 'FWC',  cor_bg: '#1a237e', cor_fg: '#ffffff', grupo: 'ESP' },
  { nome: 'História da Copa', sigla: 'HIS',  cor_bg: '#4a148c', cor_fg: '#ffffff', grupo: 'ESP' },
  { nome: 'Coca-Cola',        sigla: 'CC',   cor_bg: '#b71c1c', cor_fg: '#ffffff', grupo: 'ESP' },

  // GRUPO A
  { nome: 'México',            sigla: 'MEX', cor_bg: '#006847', cor_fg: '#ffffff', grupo: 'A' },
  { nome: 'África do Sul',     sigla: 'RSA', cor_bg: '#007a4d', cor_fg: '#ffffff', grupo: 'A' },
  { nome: 'Coreia do Sul',     sigla: 'KOR', cor_bg: '#cd2e3a', cor_fg: '#ffffff', grupo: 'A' },
  { nome: 'República Tcheca',  sigla: 'CZE', cor_bg: '#d7141a', cor_fg: '#ffffff', grupo: 'A' },

  // GRUPO B
  { nome: 'Canadá',               sigla: 'CAN', cor_bg: '#ff0000', cor_fg: '#ffffff', grupo: 'B' },
  { nome: 'Bósnia e Herzegovina', sigla: 'BIH', cor_bg: '#002395', cor_fg: '#ffffff', grupo: 'B' },
  { nome: 'Catar',                sigla: 'QAT', cor_bg: '#8d1b3d', cor_fg: '#ffffff', grupo: 'B' },
  { nome: 'Suíça',                sigla: 'SUI', cor_bg: '#d52b1e', cor_fg: '#ffffff', grupo: 'B' },

  // GRUPO C
  { nome: 'Brasil',   sigla: 'BRA', cor_bg: '#009c3b', cor_fg: '#ffdf00', grupo: 'C' },
  { nome: 'Marrocos', sigla: 'MAR', cor_bg: '#c1272d', cor_fg: '#ffffff', grupo: 'C' },
  { nome: 'Haiti',    sigla: 'HAI', cor_bg: '#00209f', cor_fg: '#ffffff', grupo: 'C' },
  { nome: 'Escócia',  sigla: 'SCO', cor_bg: '#003366', cor_fg: '#ffffff', grupo: 'C' },

  // GRUPO D
  { nome: 'EUA',       sigla: 'USA', cor_bg: '#002868', cor_fg: '#ffffff', grupo: 'D' },
  { nome: 'Paraguai',  sigla: 'PAR', cor_bg: '#d52b1e', cor_fg: '#ffffff', grupo: 'D' },
  { nome: 'Austrália', sigla: 'AUS', cor_bg: '#00843d', cor_fg: '#ffcd00', grupo: 'D' },
  { nome: 'Turquia',   sigla: 'TUR', cor_bg: '#e30a17', cor_fg: '#ffffff', grupo: 'D' },

  // GRUPO E
  { nome: 'Alemanha',        sigla: 'GER', cor_bg: '#000000', cor_fg: '#ffffff', grupo: 'E' },
  { nome: 'Curaçao',         sigla: 'CUW', cor_bg: '#003087', cor_fg: '#ffffff', grupo: 'E' },
  { nome: 'Costa do Marfim', sigla: 'CIV', cor_bg: '#f77f00', cor_fg: '#ffffff', grupo: 'E' },
  { nome: 'Equador',         sigla: 'ECU', cor_bg: '#ffda00', cor_fg: '#034694', grupo: 'E' },

  // GRUPO F
  { nome: 'Holanda', sigla: 'NED', cor_bg: '#ff6600', cor_fg: '#ffffff', grupo: 'F' },
  { nome: 'Japão',   sigla: 'JPN', cor_bg: '#bc002d', cor_fg: '#ffffff', grupo: 'F' },
  { nome: 'Suécia',  sigla: 'SWE', cor_bg: '#006aa7', cor_fg: '#fecc02', grupo: 'F' },
  { nome: 'Tunísia', sigla: 'TUN', cor_bg: '#e70013', cor_fg: '#ffffff', grupo: 'F' },

  // GRUPO G
  { nome: 'Bélgica',       sigla: 'BEL', cor_bg: '#000000', cor_fg: '#fdda24', grupo: 'G' },
  { nome: 'Egito',         sigla: 'EGY', cor_bg: '#ce1126', cor_fg: '#ffffff', grupo: 'G' },
  { nome: 'Irã',           sigla: 'IRN', cor_bg: '#239f40', cor_fg: '#ffffff', grupo: 'G' },
  { nome: 'Nova Zelândia', sigla: 'NZL', cor_bg: '#00247d', cor_fg: '#ffffff', grupo: 'G' },

  // GRUPO H
  { nome: 'Espanha',        sigla: 'ESP', cor_bg: '#aa151b', cor_fg: '#f1bf00', grupo: 'H' },
  { nome: 'Cabo Verde',     sigla: 'CPV', cor_bg: '#003893', cor_fg: '#ffffff', grupo: 'H' },
  { nome: 'Arábia Saudita', sigla: 'KSA', cor_bg: '#006c35', cor_fg: '#ffffff', grupo: 'H' },
  { nome: 'Uruguai',        sigla: 'URU', cor_bg: '#5eb6e4', cor_fg: '#ffffff', grupo: 'H' },

  // GRUPO I
  { nome: 'França',   sigla: 'FRA', cor_bg: '#002395', cor_fg: '#ffffff', grupo: 'I' },
  { nome: 'Senegal',  sigla: 'SEN', cor_bg: '#00853f', cor_fg: '#ffffff', grupo: 'I' },
  { nome: 'Iraque',   sigla: 'IRQ', cor_bg: '#ce1126', cor_fg: '#ffffff', grupo: 'I' },
  { nome: 'Noruega',  sigla: 'NOR', cor_bg: '#ef2b2d', cor_fg: '#ffffff', grupo: 'I' },

  // GRUPO J
  { nome: 'Argentina', sigla: 'ARG', cor_bg: '#74acdf', cor_fg: '#ffffff', grupo: 'J' },
  { nome: 'Argélia',   sigla: 'ALG', cor_bg: '#006233', cor_fg: '#ffffff', grupo: 'J' },
  { nome: 'Áustria',   sigla: 'AUT', cor_bg: '#ed2939', cor_fg: '#ffffff', grupo: 'J' },
  { nome: 'Jordânia',  sigla: 'JOR', cor_bg: '#007a3d', cor_fg: '#ffffff', grupo: 'J' },

  // GRUPO K
  { nome: 'Portugal',     sigla: 'POR', cor_bg: '#006600', cor_fg: '#ffffff', grupo: 'K' },
  { nome: 'RD Congo',     sigla: 'COD', cor_bg: '#007fff', cor_fg: '#ffffff', grupo: 'K' },
  { nome: 'Uzbequistão',  sigla: 'UZB', cor_bg: '#1eb53a', cor_fg: '#ffffff', grupo: 'K' },
  { nome: 'Colômbia',     sigla: 'COL', cor_bg: '#fcd116', cor_fg: '#003087', grupo: 'K' },

  // GRUPO L
  { nome: 'Inglaterra', sigla: 'ENG', cor_bg: '#cf081f', cor_fg: '#ffffff', grupo: 'L' },
  { nome: 'Croácia',    sigla: 'CRO', cor_bg: '#ff0000', cor_fg: '#ffffff', grupo: 'L' },
  { nome: 'Gana',       sigla: 'GHA', cor_bg: '#006b3f', cor_fg: '#ffffff', grupo: 'L' },
  { nome: 'Panamá',     sigla: 'PAN', cor_bg: '#da121a', cor_fg: '#ffffff', grupo: 'L' },
]

// ── Status por seleção (índice 0 = figurinha 1) ───────────────────────────────
// T = TENHO | R = REPETIDA | F = FALTA

const statusPorSelecao: Record<string, string[]> = {
  FWC: ['TENHO','FALTA','TENHO','TENHO','FALTA','FALTA','TENHO','TENHO','TENHO','FALTA','FALTA','FALTA','FALTA','FALTA','FALTA','FALTA','FALTA','TENHO','FALTA','FALTA'],
  HIS: ['FALTA','FALTA','FALTA','FALTA','FALTA','FALTA','FALTA','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','FALTA'],
  CC:  ['TENHO','TENHO','TENHO','TENHO','FALTA','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','REPETIDA','FALTA','FALTA','FALTA','FALTA','FALTA','FALTA'],

  MEX: ['TENHO','FALTA','FALTA','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','REPETIDA','REPETIDA','REPETIDA','REPETIDA','REPETIDA','REPETIDA','REPETIDA','REPETIDA'],
  RSA: ['TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','REPETIDA'],
  KOR: ['TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  CZE: ['TENHO','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO'],

  CAN: ['TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','REPETIDA','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO'],
  BIH: ['TENHO','TENHO','FALTA','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO'],
  QAT: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO'],
  SUI: ['TENHO','TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],

  BRA: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  MAR: ['TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  HAI: ['TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO'],
  SCO: ['TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],

  USA: ['TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO'],
  PAR: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO'],
  AUS: ['TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','REPETIDA','REPETIDA','TENHO','TENHO','TENHO'],
  TUR: ['TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','FALTA','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO'],

  GER: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','FALTA','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA'],
  CUW: ['TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  CIV: ['TENHO','TENHO','REPETIDA','TENHO','FALTA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO'],
  ECU: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO'],

  NED: ['TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO'],
  JPN: ['TENHO','TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO'],
  SWE: ['TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','REPETIDA','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','REPETIDA','TENHO'],
  TUN: ['TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','REPETIDA','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],

  BEL: ['TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO'],
  EGY: ['TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO'],
  IRN: ['TENHO','TENHO','TENHO','FALTA','TENHO','REPETIDA','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  NZL: ['TENHO','TENHO','TENHO','FALTA','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO'],

  ESP: ['TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  CPV: ['TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO'],
  KSA: ['TENHO','TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO'],
  URU: ['TENHO','TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','REPETIDA','TENHO','TENHO'],

  FRA: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  SEN: ['TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO'],
  IRQ: ['TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  NOR: ['TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO'],

  ARG: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  ALG: ['TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  AUT: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  JOR: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','FALTA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],

  POR: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO'],
  COD: ['TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  UZB: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  COL: ['TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],

  ENG: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO'],
  CRO: ['TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  GHA: ['TENHO','TENHO','TENHO','REPETIDA','TENHO','TENHO','REPETIDA','REPETIDA','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO','TENHO'],
  PAN: ['TENHO','TENHO','REPETIDA','TENHO','REPETIDA','TENHO','REPETIDA','REPETIDA','TENHO','TENHO','TENHO','REPETIDA','REPETIDA','TENHO','REPETIDA','TENHO','REPETIDA','REPETIDA','TENHO','TENHO'],
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function parseStatus(s: string): Status {
  if (s === 'T') return Status.TENHO
  if (s === 'R') return Status.REPETIDA
  return Status.FALTA
}

// ── Seed ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🌱 Iniciando seed...')

  // Limpa na ordem correta (FK)
  await prisma.figurinha.deleteMany()
  await prisma.selecao.deleteMany()
  await prisma.grupo.deleteMany()

  // Grupos
  console.log('📁 Criando grupos...')
  for (const g of grupos) {
    await prisma.grupo.create({ data: g })
  }

  // Seleções + Figurinhas
  console.log('🌍 Criando seleções e figurinhas...')
  for (const s of selecoes) {
    const grupo = await prisma.grupo.findUnique({ where: { nome: s.grupo } })
    if (!grupo) throw new Error(`Grupo ${s.grupo} não encontrado`)

    const selecao = await prisma.selecao.create({
      data: {
        nome:     s.nome,
        sigla:    s.sigla,
        cor_bg:   s.cor_bg,
        cor_fg:   s.cor_fg,
        grupo_id: grupo.id,
      },
    })

    const statusList = statusPorSelecao[s.sigla]
    if (!statusList) {
      console.warn(`⚠️  Status não encontrado para ${s.sigla}, pulando figurinhas`)
      continue
    }

    const figurinhas = statusList.map((st, i) => ({
      numero:     i + 1,
      codigo:     `${s.sigla}${i + 1}`,
      status:     parseStatus(st),
      selecao_id: selecao.id,
    }))

    await prisma.figurinha.createMany({ data: figurinhas })
    console.log(`  ✅ ${s.sigla} — ${figurinhas.length} figurinhas`)
  }

  // Stats finais
  const total     = await prisma.figurinha.count()
  const tenho     = await prisma.figurinha.count({ where: { status: Status.TENHO } })
  const repetida  = await prisma.figurinha.count({ where: { status: Status.REPETIDA } })
  const falta     = await prisma.figurinha.count({ where: { status: Status.FALTA } })

  console.log('\n📊 Resumo:')
  console.log(`  Total:     ${total}`)
  console.log(`  Tenho:     ${tenho}`)
  console.log(`  Repetidas: ${repetida}`)
  console.log(`  Faltando:  ${falta}`)
  console.log('\n✅ Seed concluído!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })