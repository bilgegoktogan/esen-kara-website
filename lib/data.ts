export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  type: "article" | "book" | "chapter";
  doi?: string;
  coAuthors?: string[];
  abstract?: string;
  field: string[];
  pdfUrl?: string;
  coverImage?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "literature" | "travel" | "academia" | "culture" | "books";
  coverImage: string;
  location?: string;
  content: string;
}

export interface Course {
  name: string;
  level: "undergraduate" | "graduate";
  description: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  titleTr: string;
  description: string;
  descriptionTr: string;
  icon: string;
  publications: string[];
}

export const siteConfig = {
  name: "Esen Kara Göktoğan",
  title: {
    en: "Where Literature Meets the City",
    tr: "Edebiyat, Kent ve Bellek Arasında",
  },
  greeting: {
    en: "Hi, I'm Esen!",
    tr: "Merhaba, ben Esen!",
  },
  bio: {
    en: "Assistant Professor of English Language and Literature at Yaşar University. My research explores the intersections of comparative literature, memory studies, ecocriticism, and critical urban theory. I'm passionate about understanding how literature imagines and reimagines urban spaces, ecological relations, and collective memory.",
    tr: "Yaşar Üniversitesi İngiliz Dili ve Edebiyatı Bölümü'nde Dr. Öğretim Üyesi. Araştırmalarım karşılaştırmalı edebiyat, bellek çalışmaları, ekoeleştiri ve eleştirel kent kuramının kesişim noktalarını inceliyor. Edebiyatın kentsel mekânları, ekolojik ilişkileri ve kolektif belleği nasıl tasavvur ettiğini ve yeniden kurguladığını anlama tutkusuyla çalışıyorum.",
  },
  email: "esen.kara@yasar.edu.tr",
  social: {
    instagram: "https://instagram.com/esenkara_",
    twitter: "https://x.com/kozmikyumurta",
    scholar: "https://scholar.google.com/citations?user=5vX222UAAAAJ",
    academia: "https://yasar.academia.edu/EsenKara",
    researchgate: "https://www.researchgate.net/profile/Esen-Kara",
  },
  university: {
    name: { en: "Yaşar University", tr: "Yaşar Üniversitesi" },
    faculty: {
      en: "Faculty of Human and Social Sciences",
      tr: "İnsan ve Toplum Bilimleri Fakültesi",
    },
    department: {
      en: "English Language and Literature",
      tr: "İngiliz Dili ve Edebiyatı",
    },
  },
};

export const education = [
  {
    degree: { en: "Ph.D.", tr: "Doktora" },
    field: {
      en: "American Culture and Literature",
      tr: "Amerikan Kültürü ve Edebiyatı",
    },
    university: { en: "Dokuz Eylül University", tr: "Dokuz Eylül Üniversitesi" },
    thesis: {
      en: '"Right to the City" movement and its representations in the transnational American novel',
      tr: '"Kente hakkı" hareketi ve ulusötesi Amerikan romanındaki temsilleri',
    },
  },
  {
    degree: { en: "M.A.", tr: "Yüksek Lisans" },
    field: {
      en: "American Culture and Literature",
      tr: "Amerikan Kültürü ve Edebiyatı",
    },
    university: { en: "Dokuz Eylül University", tr: "Dokuz Eylül Üniversitesi" },
  },
  {
    degree: { en: "B.A.", tr: "Lisans" },
    field: {
      en: "English Language and Literature",
      tr: "İngiliz Dili ve Edebiyatı",
    },
    university: { en: "Ankara University", tr: "Ankara Üniversitesi" },
  },
];

export const researchAreas: ResearchArea[] = [
  {
    id: "comparative",
    title: "Comparative Literature",
    titleTr: "Karşılaştırmalı Edebiyat",
    description:
      "Exploring literary traditions across cultures and languages, examining how different literary traditions engage with shared themes of displacement, belonging, and cultural identity.",
    descriptionTr:
      "Kültürler ve diller arasında edebiyat geleneklerini inceliyor; farklı edebiyat geleneklerinin yerinden edilme, aidiyet ve kültürel kimlik gibi ortak temalarla nasıl ilişkilendiğini araştırıyorum.",
    icon: "📚",
    publications: ["pub-4", "pub-7"],
  },
  {
    id: "memory",
    title: "Memory Studies",
    titleTr: "Bellek Çalışmaları",
    description:
      "Investigating how literature constructs, preserves, and transforms collective and individual memory, with particular attention to post-representational affect and embodied memory.",
    descriptionTr:
      "Edebiyatın kolektif ve bireysel belleği nasıl inşa ettiğini, koruduğunu ve dönüştürdüğünü, özellikle temsil-ötesi duygulanım ve bedenselleşmiş belleğe odaklanarak inceliyorum.",
    icon: "🧠",
    publications: ["pub-2"],
  },
  {
    id: "ecocriticism",
    title: "Ecocriticism",
    titleTr: "Ekoeleştiri",
    description:
      "Examining ecological imagination in contemporary literature, exploring how writers engage with environmental consciousness, posthumanism, and the relationship between human and non-human worlds.",
    descriptionTr:
      "Çağdaş edebiyatta ekolojik tahayyülü incelerek, yazarların çevre bilinci, posthümanizm ve insan ile insan-dışı dünyalar arasındaki ilişkiyle nasıl etkileşime girdiğini araştırıyorum.",
    icon: "🌿",
    publications: ["pub-1", "pub-6"],
  },
  {
    id: "urban",
    title: "Critical Urban Theory",
    titleTr: "Eleştirel Kent Kuramı",
    description:
      "Analyzing literary representations of the city, urban refugees, flânerie, and the right to the city in transnational fiction. How do novels reimagine urban space as a site of resistance and belonging?",
    descriptionTr:
      'Edebiyatta kent temsilleri, kentsel mülteciler, flanörlük ve ulusötesi romanda "kente hakkı" kavramını inceliyorum. Romanlar kentsel mekânı direniş ve aidiyet alanı olarak nasıl yeniden tasavvur ediyor?',
    icon: "🏙️",
    publications: ["pub-3", "pub-4", "pub-5", "pub-6"],
  },
  {
    id: "postcolonial",
    title: "Postcolonial Studies",
    titleTr: "Post-kolonyal Çalışmalar",
    description:
      "Engaging with postcolonial theory to understand how literature from formerly colonized societies and diasporic communities challenges dominant narratives and imagines alternative futures.",
    descriptionTr:
      "Eskiden sömürgeleştirilmiş toplumlar ve diasporik toplulukların edebiyatının baskın anlatıları nasıl sorguladığını ve alternatif gelecekleri nasıl tasavvur ettiğini anlamak için post-kolonyal teori ile çalışıyorum.",
    icon: "🌍",
    publications: ["pub-1", "pub-3"],
  },
];

export const publications: Publication[] = [
  {
    id: "pub-3a",
    title:
      "Cosmopolitan Encounters and Everyday Exclusions: Izmir in Early Nineteenth Century American Travelogues",
    journal: "Çankaya University Journal of Humanities and Social Sciences",
    year: 2026,
    type: "article",
    coAuthors: ["Ayşegül Avcı"],
    field: ["Comparative Literature", "Urban Theory"],
    abstract:
      "This article examines early nineteenth century American travelogues about Izmir, exploring cosmopolitan encounters and everyday exclusions in the city's representations.",
  },
  {
    id: "pub-1",
    title:
      "Ecological Imagination and Women's Memory in Contemporary Turkish Literature",
    journal: "Interventions: Journal of Postcolonial Studies",
    year: 2025,
    type: "article",
    field: ["Ecocriticism", "Memory Studies", "Postcolonial Studies"],
    abstract:
      "This article explores the intersection of ecological imagination and women's memory in contemporary Turkish literature, examining how female authors engage with environmental consciousness and collective remembrance.",
  },
  {
    id: "pub-2",
    title:
      "Toni Morrison'ın Sevilen Romanında Temsil-Ötesi Bellek ve Duygulanım",
    journal: "",
    year: 2025,
    type: "book",
    field: ["Memory Studies", "Comparative Literature"],
    abstract:
      "Bu kitap, Toni Morrison'ın Sevilen romanında temsil-ötesi bellek ve duygulanımın edebî işleyişini incelemektedir.",
    coverImage: "/images/book-cover-placeholder.jpg",
  },
  {
    id: "pub-4",
    title:
      "Dişil Kent Bilinci ve Bir Flanöz Romanı olarak Fosforlu Cevriye",
    journal: "Hacettepe University Journal of Faculty of Letters",
    year: 2023,
    type: "article",
    field: ["Urban Theory", "Comparative Literature"],
    abstract:
      "Bu makale, Fosforlu Cevriye romanını dişil kent bilinci ve flanöz kavramı üzerinden incelemektedir.",
  },
  {
    id: "pub-5",
    title:
      "Crossing the Threshold of the City: Urban Refugees in Héctor Tobar's The Tattooed Soldier",
    journal: "Critique: Studies in Contemporary Fiction",
    year: 2020,
    type: "article",
    field: ["Urban Theory", "Postcolonial Studies"],
    abstract:
      "This article examines how Héctor Tobar's The Tattooed Soldier portrays urban refugees navigating the thresholds of Los Angeles, exploring themes of displacement, violence, and the right to the city.",
  },
  {
    id: "pub-6",
    title: "The Pastoral Ideal and the Neoliberal City",
    journal: "Monograf",
    year: 2020,
    type: "article",
    field: ["Urban Theory", "Ecocriticism"],
    abstract:
      "This article analyzes the tension between pastoral ideals and the realities of the neoliberal city in contemporary literature.",
  },
  {
    id: "pub-7",
    title:
      "Rewriting the City as an Oeuvre in Karen Tei Yamashita's Tropic of Orange",
    journal: "Interactions",
    year: 2018,
    type: "article",
    field: ["Urban Theory", "Comparative Literature"],
    abstract:
      "This article explores how Karen Tei Yamashita's Tropic of Orange reimagines Los Angeles as an oeuvre—a collective work—through its polyphonic narrative structure and spatial imagination.",
  },
];

export const courses: Course[] = [
  {
    name: "Postcolonial Literature and Multiculturalism",
    level: "undergraduate",
    description:
      "An exploration of literary texts from postcolonial societies, examining themes of identity, cultural hybridity, and multicultural perspectives.",
  },
  {
    name: "Turkish Literature in a Comparative Context",
    level: "undergraduate",
    description:
      "A comparative study of Turkish literary traditions in dialogue with world literatures, exploring cross-cultural connections and transnational themes.",
  },
  {
    name: "Contemporary American Literature",
    level: "undergraduate",
    description:
      "A study of major works and movements in contemporary American literature, with attention to diversity, identity, and evolving narrative forms.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "dartmouth-experience",
    title: "A Season at Dartmouth: Reflections on a Visiting Appointment",
    excerpt:
      "Reflections on my time as a visiting scholar at Dartmouth College, exploring New England's literary landscapes and academic culture.",
    date: "2025-09-15",
    category: "travel",
    coverImage: "/images/blog-placeholder-1.jpg",
    location: "Hanover, New Hampshire",
    content:
      "This is a placeholder blog post about the Dartmouth experience. Content will be added through the CMS.",
  },
  {
    slug: "ecological-imagination",
    title: "Ekolojik Tahayyül: Çağdaş Türk Edebiyatında Doğa ve Bellek",
    excerpt:
      "Çağdaş Türk edebiyatında kadın yazarların ekolojik bilinç ve kolektif bellekle nasıl etkileşime girdiğine dair düşünceler.",
    date: "2025-06-20",
    category: "literature",
    coverImage: "/images/blog-placeholder-2.jpg",
    content:
      "Bu yazı, ekolojik tahayyül üzerine bir blog yazısıdır. İçerik CMS üzerinden eklenecektir.",
  },
  {
    slug: "reading-list-2025",
    title: "My 2025 Reading List: Books That Shaped My Year",
    excerpt:
      "A curated list of books—from postcolonial fiction to urban theory—that inspired my research and teaching this year.",
    date: "2025-12-01",
    category: "books",
    coverImage: "/images/blog-placeholder-3.jpg",
    content:
      "This is a placeholder blog post about reading recommendations. Content will be added through the CMS.",
  },
];

export const navItems = {
  en: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/publications", label: "Publications" },
    { href: "/teaching", label: "Teaching" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  tr: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/about", label: "Hakkımda" },
    { href: "/research", label: "Araştırma" },
    { href: "/publications", label: "Yayınlar" },
    { href: "/teaching", label: "Öğretim" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "İletişim" },
  ],
};
