export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  type: "article" | "book" | "chapter";
  doi?: string;
  url?: string;
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
    id: "pub-0",
    title:
      "Against the Currents of History: Affect and the Ethics of Witnessing in Julia Alvarez's Travel Writing",
    journal: "To be published soon",
    year: 2026,
    type: "article",
    field: ["Memory Studies", "Comparative Literature"],
  },
  {
    id: "pub-3a",
    title:
      "Cosmopolitan Encounters and Everyday Exclusions: Izmir in Early Nineteenth Century American Travelogues",
    journal: "Çankaya University Journal of Humanities and Social Sciences",
    year: 2026,
    type: "article",
    coAuthors: ["Ayşegül Avcı"],
    field: ["Comparative Literature", "Urban Theory"],
    url: "https://dergipark.org.tr/en/pub/cankujhss/article/1800157",
  },
  {
    id: "pub-1",
    title:
      "Ecological Imagination and Women's Memory in Contemporary Turkish Literature",
    journal: "Interventions: Journal of Postcolonial Studies",
    year: 2025,
    type: "article",
    field: ["Ecocriticism", "Memory Studies", "Postcolonial Studies"],
    url: "https://www.tandfonline.com/doi/full/10.1080/1369801X.2025.2544134",
  },
  {
    id: "pub-2",
    title:
      "Toni Morrison'ın Sevilen Romanında Temsil-Ötesi Bellek ve Duygulanım",
    journal: "",
    year: 2025,
    type: "chapter",
    field: ["Memory Studies", "Comparative Literature"],
    url: "https://www.amazon.com.tr/Y%C3%BCzy%C4%B1l-Amerikan-Roman%C4%B1-%C3%9Czerine-%C4%B0ncelemeler/dp/625376179X",
  },
  {
    id: "pub-4",
    title:
      "Dişil Kent Bilinci ve Bir Flanöz Romanı olarak Fosforlu Cevriye",
    journal: "Hacettepe University Journal of Faculty of Letters",
    year: 2023,
    type: "article",
    field: ["Urban Theory", "Comparative Literature"],
    url: "https://dergipark.org.tr/tr/pub/huefd/article/1169166",
  },
  {
    id: "pub-4b",
    title:
      "Önsöz: Portakal Dönencesi, Karen Tei Yamashita",
    journal: "",
    year: 2023,
    type: "article",
    field: ["Comparative Literature"],
    url: "https://liverayayinevi.com/urun/portakal-donencesi",
  },
  {
    id: "pub-5",
    title:
      "Crossing the Threshold of the City: Urban Refugees in Héctor Tobar's The Tattooed Soldier",
    journal: "Critique: Studies in Contemporary Fiction",
    year: 2020,
    type: "article",
    field: ["Urban Theory", "Postcolonial Studies"],
    url: "https://www.tandfonline.com/doi/full/10.1080/00111619.2020.1712318",
  },
  {
    id: "pub-6",
    title: "The Pastoral Ideal and the Neoliberal City",
    journal: "Monograf",
    year: 2020,
    type: "article",
    field: ["Urban Theory", "Ecocriticism"],
    url: "http://monografjournal.com/sayilar/13/06-esen-kara.pdf",
  },
  {
    id: "pub-7",
    title:
      "Rewriting the City as an Oeuvre in Karen Tei Yamashita's Tropic of Orange",
    journal: "Interactions",
    year: 2018,
    type: "article",
    field: ["Urban Theory", "Comparative Literature"],
    url: "https://englishlit.ege.edu.tr/files/englishlit/icerik/Interactions%20Vol_27_1-2.pdf",
  },
  {
    id: "pub-8",
    title: "Kent Üzerine: Düş, Yer, Müşterek ve Hareket",
    journal: "",
    year: 2018,
    type: "chapter",
    field: ["Urban Theory"],
    url: "https://www.idefix.com/kent-uzerine-dus-yer-musterek-ve-hareket-p-1861315",
  },
];

export const courses: Course[] = [
  {
    name: "Postcolonial Literature and Multiculturalism",
    level: "undergraduate",
    description:
      "Postcolonial literature refers to literary works that were produced and take as their subject matter the encounters between colonizers and the colonized. More commonly, however, it designates the contact that European colonizers established with the rest of the world over the last four hundred years. Since this period witnessed major paradigm shifts, such as the rise of humanism, the Enlightenment, and the making of modernity, the attempt to universalize and disseminate certain ideas brought questions of cultural relativity and power to the forefront. The primary aim of this course is therefore to familiarize students with a representative chronology of Anglophone postcolonial literature and with the critical terms commonly used to examine such works, while also introducing them to the latest discussions in the field of postcolonial studies. At a more specific level, this course will serve as a joint experiment in exploring the affinities and organic ties between the novel as a genre and postcolonial forms of literary expression. Accordingly, our reading list will also include texts on the theory of the novel.",
  },
  {
    name: "Turkish Literature in a Comparative Context",
    level: "undergraduate",
    description:
      "Postcolonial literature refers to literary works that were produced and take as their subject matter the encounters between colonizers and the colonized. More commonly, however, it designates the contact that European colonizers established with the rest of the world over the last four hundred years. Since this period witnessed major paradigm shifts, such as the rise of humanism, the Enlightenment, and the making of modernity, the attempt to universalize and disseminate certain ideas brought questions of cultural relativity and power to the forefront. The primary aim of this course is therefore to familiarize students with a representative chronology of Anglophone postcolonial literature and with the critical terms commonly used to examine such works, while also introducing them to the latest discussions in the field of postcolonial studies. At a more specific level, this course will serve as a joint experiment in exploring the affinities and organic ties between the novel as a genre and postcolonial forms of literary expression. Accordingly, our reading list will also include texts on the theory of the novel.",
  },
  {
    name: "Contemporary American Literature",
    level: "undergraduate",
    description:
      "This course examines American fiction from the postwar era to the early twenty-first century, focusing on how literary form and narrative voice respond to shifting social, cultural, and historical conditions. Beginning with the postwar conformity of the 1950s and the countercultural movements that challenged it, the course moves into the Civil Rights era and the emergence of new literary voices that foreground questions of race, gender, and social transformation. The course then explores the experimental and skeptical narratives associated with postmodern fiction, including fragmented storytelling, narrative indeterminacy, and representations of dislocated subjectivities. Later sections turn to late twentieth-century fiction that reflects minimalist prose, domestic realism, and an intensified focus on everyday life and interpersonal tensions. The course also addresses the rise of Indigenous and multicultural literatures that revisit colonial histories and challenge dominant national narratives. Concluding with twenty-first-century multicultural and transnational fiction, the course examines themes of diaspora, identity, and cultural memory. Together, literary texts and related cultural materials illuminate how American fiction across the late twentieth and early twenty-first centuries reimagines national myths, identity, and belonging.",
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
