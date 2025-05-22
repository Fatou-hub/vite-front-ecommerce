# Lancer l'application

commande GIT : npm run dev

# 👶 Baby E-commerce — React + TypeScript + Vite

Bienvenue sur mon projet de boutique en ligne dédiée à l'univers du bébé (couches, lingettes, biberons...).  
Il s'agit d'une application e-commerce développée en **React** avec **TypeScript** et **Vite**, dans un objectif d’apprentissage et de montée en compétences fullstack front.

---

## ✨ Fonctionnalités

- 🛍️ Affichage de produits
- 🔍 Recherche dynamique
- 🧺 Ajout / suppression d’articles au panier
- 🧾 Affichage du panier avec quantité
- ♻️ Architecture modulaire par fonctionnalités (feature-based)
- 💄 Design system réutilisable (boutons, layout)
- ⚙️ Appels API simulés avec des fichiers mock
- ⚡ Vite pour un développement rapide

---

## 🗂️ Structure du projet

L'application suit une architecture modulaire, centrée autour des fonctionnalités (`features`). Cela permet une meilleure maintenabilité et évolutivité du code.

# Commits conventionnés

structure d’un message de commit qui respecte les règles des Conventional Commits :
<type>[optional scope]: <description>
Le type correspond au type de tâches effectués:

- feat : création d’une fonctionnalité pour l’utilisateur.rice (feat est le
  diminutif de feature)
- fix : correction d’un bug pour l’utilisateur.rice
- refactor : refactor du code de production
- test : création et refactor de tests
- chore : configuration du projet (configuration du linting de commit,
  par exemple )

exemple de message de commit suivant :
"feat(cart): define AddCartButton component"
