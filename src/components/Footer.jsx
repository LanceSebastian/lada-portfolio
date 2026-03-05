export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-bg-light py-6 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-stone-400 text-sm">
        <span>© {new Date().getFullYear()} Lada Sritongbai</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  )
}
