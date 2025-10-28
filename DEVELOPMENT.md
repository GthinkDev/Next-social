# 开发指南

本项目已配置了自动代码整理和依赖管理工具，以提高开发效率和代码质量。

## 自动代码整理

项目已配置为在保存文件时自动执行以下操作：

1. **代码格式化**：使用 Prettier 格式化代码
2. **导入整理**：自动整理和排序导入语句
3. **ESLint 修复**：自动修复可修复的 ESLint 问题

### 手动运行代码整理

如果您需要手动运行代码整理，可以使用以下命令：

```bash
# 整理所有文件的导入
npm run format:imports

# 运行 ESLint 并自动修复问题
npm run lint

# 完整清理（整理导入 + ESLint 修复 + 可选依赖检查）
npm run clean:imports
npm run clean:imports -- --check-deps  # 同时检查未使用的依赖
```

## VS Code 集成

项目已配置了 VS Code 设置和任务，以提供最佳的开发体验：

### 推荐扩展

打开项目时，VS Code 会提示安装以下推荐扩展：

- Prettier - 代码格式化
- ESLint - 代码质量检查
- Tailwind CSS IntelliSense - CSS 类名提示
- TypeScript Importer - 自动导入
- Auto Rename Tag - 自动重命名配对标签
- Path Intellisense - 路径智能提示

### VS Code 任务

您可以通过 VS Code 的任务运行器（`Ctrl+Shift+P` 或 `Cmd+Shift+P`，然后输入 "Tasks: Run Task"）运行以下任务：

- Clean Imports - 运行完整的清理脚本
- Format Imports - 仅整理导入
- Lint and Fix - 运行 ESLint 并修复问题

## 项目结构

```
.vscode/
├── settings.json      # VS Code 设置
├── extensions.json    # 推荐扩展
└── tasks.json         # VS Code 任务

scripts/
└── clean-imports.js   # 自定义清理脚本
```

## 代码风格

本项目遵循以下代码风格：

- 使用 Prettier 进行代码格式化
- 导入按字母顺序排序
- 未使用的导入会被自动移除
- 遵循 ESLint 规则

## 故障排除

如果自动整理不工作，请检查：

1. 是否安装了推荐的 VS Code 扩展
2. VS Code 设置是否正确加载
3. 是否有语法错误阻止了自动整理

您可以通过运行 `npm run clean:imports` 来手动执行完整的代码整理过程。
